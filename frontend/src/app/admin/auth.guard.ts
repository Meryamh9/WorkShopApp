// src/app/admin/auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const token = localStorage.getItem('admin_token');
  const router = inject(Router);

  if (!token) {
    router.navigate(['/admin']);
    return false;
  }
  return true;
};
