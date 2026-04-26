/**
 * Project: Kigali Smart Service System
 * Developer: Muhira Mohammed
 * Description: Demonstrating OOP, Interfaces, and Types in TypeScript.
 */

// 1. Service Provider Schema
interface ServiceProvider {
    id: number;
    name: string;
    location: string;
}

// 2. Technical Service Class (OOP)
class TechService {
    constructor(
        public title: string,
        public hourlyRate: number,
        public isAvailable: boolean = true
    ) {}

    getDetails(): string {
        return `Service: ${this.title} | Rate: ${this.hourlyRate} RWF`;
    }
}

// 3. Implementation of Developer Profile
const devProfile: ServiceProvider = {
    id: 2026, 
    name: "Muhira Mohammed",
    location: "Kigali, Rwanda"
};

const cloudProject = new TechService("Software Development", 25000);

// 4. Output Execution
console.log(`Developer: ${devProfile.name} | Base: ${devProfile.location}`);
console.log(cloudProject.getDetails());
