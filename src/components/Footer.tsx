import { Coffee, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="font-heading text-2xl font-bold text-foreground">
                Salam
              </span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Where coffee meets serenity. A modern sanctuary for those who appreciate premium quality and meaningful conversations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4 text-foreground/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#reservation" className="hover:text-primary transition-colors">Reservations</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Serenity Avenue, Coffee District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@salamcafe.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex justify-between border-b border-border pb-2">
                <span>Mon - Thu</span>
                <span className="font-medium text-foreground">7:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>Friday</span>
                <span className="font-medium text-foreground">7:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sat - Sun</span>
                <span className="font-medium text-foreground">8:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Salam Cafe. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
