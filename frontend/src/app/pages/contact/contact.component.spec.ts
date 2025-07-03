import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Le composant est bien créé', () => {
    expect(component).toBeTruthy();
  });

  it('Formulaire invalide s’il est vide', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('Formulaire valide quand tous les champs sont remplis', () => {
    component.contactForm.setValue({
      nom: 'Test',
      email: 'test@example.com',
      message: 'Hello'
    });
    expect(component.contactForm.valid).toBeTruthy();
  });
});
