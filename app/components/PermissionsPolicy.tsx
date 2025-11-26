'use client';

import { useEffect } from 'react';

export default function PermissionsPolicy() {
  useEffect(() => {
    // Remove existing meta tag if present
    const existingMeta = document.querySelector('meta[http-equiv="permissions-policy"]');
    if (existingMeta) {
      existingMeta.remove();
    }

    // Create and add the permissions policy meta tag
    // Allow publickey-credentials for all origins (*) to support cross-origin iframes
    // This delegates the permission to child frames
    const meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'permissions-policy');
    meta.setAttribute('content', 'publickey-credentials-create=(self *), publickey-credentials-get=(self *)');
    document.head.insertBefore(meta, document.head.firstChild);

    // Cleanup function
    return () => {
      const metaToRemove = document.querySelector('meta[http-equiv="permissions-policy"]');
      if (metaToRemove) {
        metaToRemove.remove();
      }
    };
  }, []);

  return null;
}

