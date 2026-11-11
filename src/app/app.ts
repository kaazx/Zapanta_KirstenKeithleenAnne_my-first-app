import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Kirsten Keithleen Anne A. Zapanta';
  location = 'Porac, Pampanga';
  email = 'zapanta.kirsten01@gmail.com';
  phone = '0999 827 1078';

  profile = 'I am a highly adaptable and analytical Information Technology student with hands-on experience in customer service, administrative support, and technical tasks. Equipped with strong verbal and written communication, problem-solving, and organizational skills, I am proficient in a wide range of digital tools and software essential for corporate work. I am currently seeking entry-level opportunities or internships in Web Development and Quality Assurance where I can apply my technical foundation and contribute effectively to team goals while continuing to grow and develop professionally.';

  skills = [
    'Detail-Oriented',
    'Collaboration',
    'Communication',
    'Time Management',
    'Problem-Solving',
    'Accountability',
    'Resiliency',
    'Continuous Learning'
  ];

  tech = [
    'HTML, CSS, & Python',
    'Database Fundamentals',
    'Figma',
    'Google Workspace',
    'Research & Technical Documentation'
  ];

  message = 'Nice to meet you! Try interacting with the button.';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
