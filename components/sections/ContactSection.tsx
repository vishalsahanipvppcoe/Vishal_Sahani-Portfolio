'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { Mail, Phone, Linkedin, Code2, Send } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      window.location.href = `mailto:${siteConfig.links.displayEmail}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
      toast.success('Opening your email client...');
      setIsSending(false);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <div id="contact" className="h-full flex flex-col">
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Contact &amp; Connect
        </h2>
        <p className="text-sm text-muted-foreground">
          Open for Software Engineer / SDE roles, internships &amp; technical collaborations.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 flex-1 flex flex-col justify-between shadow-sm">
        <div className="space-y-5">
          {/* Top: Message Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* First line: Name & Email side-by-side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-10 rounded-lg border border-border bg-background px-3.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 rounded-lg border border-border bg-background px-3.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-foreground mb-1.5">
                Drop a Message
              </label>
              <textarea
                id="contact-message"
                rows={3}
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-background p-3.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex h-9 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-emerald-600 dark:bg-emerald-500 px-6 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors duration-150 disabled:opacity-50"
            >
              <Send className="h-3.5 w-3.5" />
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Bottom: Direct Email, Phone & Coding Profiles */}
          <div className="border-t border-border pt-4 space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-border/70 bg-muted/40 p-3">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                  Direct email
                </span>
                <a
                  href={siteConfig.links.email}
                  className="flex items-center gap-2 text-xs font-medium text-foreground hover:text-emerald-500 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">{siteConfig.links.displayEmail}</span>
                </a>
              </div>

              <div className="rounded-lg border border-border/70 bg-muted/40 p-3">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                  Phone
                </span>
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="flex items-center gap-2 text-xs font-medium text-foreground hover:text-emerald-500 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{siteConfig.links.displayPhone}</span>
                </a>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                Coding &amp; Social Profiles
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border/70 bg-muted/40 px-3 text-xs font-medium text-muted-foreground hover:border-border hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5 text-blue-500" />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border/70 bg-muted/40 px-3 text-xs font-medium text-muted-foreground hover:border-border hover:text-foreground transition-colors"
                >
                  <Code2 className="h-3.5 w-3.5 text-amber-500" />
                  LeetCode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;