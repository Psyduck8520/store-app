import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
@Component({
  template: `<p appHighlight>Test</p>`
})
class TestComponent {}
describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const element = fixture.nativeElement.querySelector('p');
    const directive = fixture.debugElement.children[0].injector.get(HighlightDirective);
    expect(directive).toBeTruthy();
  });
});
