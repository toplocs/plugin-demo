/**
 * Demo Plugin Entity Definitions
 * Shows how plugins can extend the TopLocs entity system
 */

import { BaseEntity, Relation } from '@tribelike/types';

// 1. Custom Entity Type
export interface SecureNote extends BaseEntity {
  id: string;
  title: string;
  content: string;
  encryptionLevel: 'private' | 'shared' | 'public';
  author: string; // public key
  signature?: string;
  tags: string[];
  sharedWith?: string[]; // public keys
  contentId?: string; // CID for content-addressed storage
  timestamp: number;
  pluginId: 'secure-demo-plugin';
}

// 2. Custom Relation Types for SecureNote
export const secureNoteRelations = [
  {
    id: 'encrypts',
    active: 'encrypting',
    passive: 'encrypted by',
    color: 'blue',
    icon: 'lock',
    accepts: ['SecureNote'],
    description: 'User encrypts a secure note'
  },
  {
    id: 'shares-with',
    active: 'sharing with',
    passive: 'shared by',
    color: 'green', 
    icon: 'share',
    accepts: ['SecureNote', 'User'],
    description: 'Secure note is shared with specific users'
  },
  {
    id: 'tags',
    active: 'tagging',
    passive: 'tagged by',
    color: 'purple',
    icon: 'tag',
    accepts: ['SecureNote', 'Topic'],
    description: 'Secure note tags a topic'
  },
  {
    id: 'locates',
    active: 'located at',
    passive: 'location of',
    color: 'orange',
    icon: 'location',
    accepts: ['SecureNote', 'Location'],
    description: 'Secure note is associated with a location'
  },
  {
    id: 'references',
    active: 'referencing',
    passive: 'referenced by',
    color: 'gray',
    icon: 'link',
    accepts: ['SecureNote', 'SecureNote'],
    description: 'One secure note references another'
  }
];

// 3. Plugin Entity Registry Entry
export const pluginEntityDefinition = {
  pluginId: 'secure-demo-plugin',
  entities: [
    {
      type: 'SecureNote',
      name: 'Secure Note',
      description: 'Encrypted note with flexible sharing options',
      icon: 'shield-check',
      color: 'blue',
      namespace: 'secure-notes',
      schema: {
        required: ['title', 'content', 'encryptionLevel'],
        optional: ['tags', 'sharedWith', 'contentId']
      }
    }
  ],
  relations: secureNoteRelations
};

// 4. Entity Validation Schema
export const validateSecureNote = (note: Partial<SecureNote>): boolean => {
  if (!note.title || !note.content || !note.encryptionLevel) {
    return false;
  }
  
  if (!['private', 'shared', 'public'].includes(note.encryptionLevel)) {
    return false;
  }
  
  if (note.encryptionLevel === 'shared' && (!note.sharedWith || note.sharedWith.length === 0)) {
    return false;
  }
  
  return true;
};

// 5. Entity Factory Functions
export const createSecureNote = (
  title: string,
  content: string,
  encryptionLevel: SecureNote['encryptionLevel'],
  author: string,
  options: Partial<SecureNote> = {}
): SecureNote => {
  return {
    id: crypto.randomUUID(),
    title,
    content,
    encryptionLevel,
    author,
    tags: options.tags || [],
    sharedWith: options.sharedWith || [],
    timestamp: Date.now(),
    pluginId: 'secure-demo-plugin',
    ...options
  };
};

// 6. Entity Permissions
export interface EntityPermission {
  entityType: string;
  entityId: string;
  userId: string; // public key
  permissions: ('read' | 'write' | 'share' | 'delete')[];
  grantedBy: string; // public key
  grantedAt: number;
  signature: string;
}

// 7. Entity Search/Query Interface
export interface EntityQuery {
  type?: string;
  author?: string;
  encryptionLevel?: SecureNote['encryptionLevel'];
  tags?: string[];
  dateRange?: {
    from: number;
    to: number;
  };
  searchText?: string;
  limit?: number;
  offset?: number;
}

// 8. Entity Events for Plugin Communication
export interface EntityEvent {
  type: 'created' | 'updated' | 'deleted' | 'shared';
  entityType: string;
  entityId: string;
  author: string;
  timestamp: number;
  pluginId: string;
  data?: any;
}

// 9. Cross-Plugin Entity References
export interface CrossPluginReference {
  sourcePlugin: string;
  sourceEntity: string;
  sourceEntityId: string;
  targetPlugin: string;
  targetEntity: string;
  targetEntityId: string;
  relationType: string;
  metadata?: any;
}

// 10. Entity Encryption Helpers
export const entityEncryptionMethods = {
  // Private: Only author can decrypt
  private: async (entity: SecureNote, userKeys: any) => {
    return await SEA.encrypt(entity, userKeys);
  },
  
  // Shared: Multiple users can decrypt
  shared: async (entity: SecureNote, sharedKeys: any[]) => {
    const encrypted = {};
    for (const userKey of sharedKeys) {
      const secret = await SEA.secret(userKeys.epub, userKey);
      encrypted[userKey] = await SEA.encrypt(entity, secret);
    }
    return encrypted;
  },
  
  // Public: Signed but not encrypted
  public: async (entity: SecureNote, userKeys: any) => {
    const signature = await SEA.sign(entity, userKeys);
    return { ...entity, signature };
  }
};