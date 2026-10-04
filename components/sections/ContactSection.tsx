'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { Mail, Phone, Linkedin, Code2, Send } from 'lucide-react';
import { toast } from 'sonner';
import { sendMessageServerAction } from '@/app/actions/sendMailServerAction';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    if (name.length < 3) {
      toast.error('Please enter your full name (at least 3 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (message.length < 10) {
      toast.error('Message must contain at least 10 characters.');
      return;
    }

    setIsSending(true);

    try {
      const data = new FormData();
      data.append('fullname', name);
      data.append('email', email);
      data.append('message', message);

      const response = await sendMessageServerAction(null, data);

      if (response?.success) {
        toast.success(response.success);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorMsg =
          response?.fullnameError ||
          response?.emailError ||
          response?.messageError ||
          response?.error ||
          'Unable to send your message right now. Please try again later.';
        toast.error(errorMsg);
      }
    } catch {
      toast.error('Unable to send your message right now. Please try again later.');
    } finally {
      setIsSending(false);
    }
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
        <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-3.5">
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
                  disabled={isSending}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-10 rounded-lg border border-border bg-background px-3.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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
                  disabled={isSending}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 rounded-lg border border-border bg-background px-3.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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
                disabled={isSending}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-background p-3.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            {/* Send Message & Direct Email on one line */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5 pt-1">
              <button
                type="submit"
                disabled={isSending}
                className="min-h-[46px] sm:min-h-0 sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 dark:bg-emerald-500 px-6 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors duration-150 disabled:opacity-50 cursor-pointer shrink-0"
              >
                <Send className="h-3.5 w-3.5" />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>

              <div className="flex-1 rounded-xl border border-border/70 dark:border-slate-800 bg-muted/30 dark:bg-slate-900/60 p-2.5 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-0.5">
                  Direct Email
                </span>
                <a
                  href={siteConfig.links.email}
                  className="flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-emerald-500 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{siteConfig.links.displayEmail}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom: Phone & Social Profiles in a sleek 2-column row */}
          <div className="border-t border-border/80 dark:border-slate-800/80 pt-3.5 mt-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-border/70 dark:border-slate-800 bg-muted/30 dark:bg-slate-900/60 p-2.5 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  Phone
                </span>
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-emerald-500 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{siteConfig.links.displayPhone}</span>
                </a>
              </div>

              <div className="rounded-xl border border-border/70 dark:border-slate-800 bg-muted/30 dark:bg-slate-900/60 p-2.5 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                  Social Profiles
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-blue-500 transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-blue-500" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-border dark:text-slate-800">•</span>
                  <a
                    href={siteConfig.links.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-amber-500 transition-colors"
                  >
                    <Code2 className="h-3.5 w-3.5 text-amber-500" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;