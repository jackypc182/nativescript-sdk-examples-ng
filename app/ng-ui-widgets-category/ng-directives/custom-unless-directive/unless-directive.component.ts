// >> unless-directive-code
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./unless-directive.component.html",
})
export class CustomUnlessComponent {

    public age: number;
    public condition: boolean;

    constructor() {
        this.condition = true;
    }

    onTap(args) {
        console.log("onTap age is :" + this.age);

        if (this.age >= 18 && this.age !== 0) {
            this.condition = false;
        } else {
            this.condition = true;
        }
    }
}
// << unless-directive-code
