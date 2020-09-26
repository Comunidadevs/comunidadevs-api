export class Organizer {
  private name: string;

  private email: string;

  private twitter: string;

  private instagram: string;

  private facebook: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.twitter = '';
    this.instagram = '';
    this.facebook = '';
  }

  // Setters
  set Name(name: string) {
    this.name = name;
  }

  get Name(): string {
    return this.name;
  }

  set Email(email: string) {
    this.email = email;
  }

  get Email(): string {
    return this.email;
  }

  set Twitter(twitter: string) {
    this.twitter = twitter;
  }

  get Twitter(): string {
    return this.twitter;
  }

  set Instagram(instagram: string) {
    this.instagram = instagram;
  }

  get Instagram(): string {
    return this.instagram;
  }

  set Facebook(facebook: string) {
    this.facebook = facebook;
  }

  get Facebook(): string {
    return this.facebook;
  }
}

export default Organizer;
