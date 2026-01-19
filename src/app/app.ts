import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sonar-project');
  
  // SonarQube Issues for Testing:
  
  // Issue 1: Unused variable
  private unusedVariable = 'This variable is never used';
  
  // Issue 2: Console.log (Code smell)
  ngOnInit() {
    console.log('Component initialized'); // Remove console.log
    console.log('Debug info');
    
    // Issue 3: Duplicated code blocks
    this.duplicatedCode1();
    this.duplicatedCode2();
    
    // Issue 4: Cognitive complexity
    this.complexFunction(10);
    
    // Issue 5: Magic numbers
    const result = this.calculate(42, 100);
    
    // Issue 6: Dead code
    if (false) {
      console.log('This will never execute');
    }
  }
  
  // Issue 7: Code duplication
  duplicatedCode1() {
    const data = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    console.log(sum);
  }
  
  duplicatedCode2() {
    const data = [6, 7, 8, 9, 10];
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    console.log(sum);
  }
  
  // Issue 8: High cyclomatic complexity
  complexFunction(value: number) {
    if (value > 0) {
      if (value > 10) {
        if (value > 20) {
          if (value > 30) {
            if (value > 40) {
              if (value > 50) {
                return 'Very high';
              } else {
                return 'High';
              }
            } else {
              return 'Medium-high';
            }
          } else {
            return 'Medium';
          }
        } else {
          return 'Low-medium';
        }
      } else {
        return 'Low';
      }
    } else {
      return 'Zero or negative';
    }
  }
  
  // Issue 9: Magic numbers and no type safety
  calculate(a, b) {
    return a * b / 2 + 15 - 7;
  }
  
  // Issue 10: Empty catch block
  riskyOperation() {
    try {
      throw new Error('Something went wrong');
    } catch (e) {
      // Empty catch block - code smell
    }
  }
  
  // Issue 11: == instead of ===
  compareValues(a: any, b: any) {
    if (a == b) { // Should use ===
      return true;
    }
    return false;
  }
  
  // Issue 12: TODO comments
  // TODO: Fix this later
  // FIXME: This is broken
  incompleteFeature() {
    return null;
  }
}
