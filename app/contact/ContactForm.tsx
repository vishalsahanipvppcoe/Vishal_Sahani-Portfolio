'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { sendMessageServerAction } from '../actions/sendMailServerAction';

const labelWithRequiredStar = ({ label }: { label: string }) => {
  return (
    <Label htmlFor={label.toLowerCase()}>
      <span className="flex gap-1">
        <span>{label}</span>
        <span className="text-red-500">*</span>
      </span>
    </Label>
  );
};

const ContactForm = () => {
  const [state, action, isPending] = useActionState(
    sendMessageServerAction,
    null
  );

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (state?.success) {
      toast.success(state.success);
      setFormData({ fullname: '', email: '', message: '' });
    }
  }, [state?.success]);

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.error]);

  return (
    <>
      {/* Direct Contact (IMPORTANT BACKUP) */}
      <div className="mb-6 text-center text-sm text-muted-foreground">
        Or directly email me at{' '}
        <a
          href="mailto:vishalsahani1018@gmail.com"
          className="underline font-medium"
        >
          vishalsahani1018@gmail.com
        </a>
      </div>

      <form action={action} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          {labelWithRequiredStar({ label: 'Name' })}
          <Input
            type="text"
            id="name"
            name="fullname"
            required
            placeholder="Enter your full name"
            className="px-3 py-6"
            value={formData.fullname}
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
          />
          {state?.fullnameError && (
            <span className="text-sm text-red-500">
              {state.fullnameError}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          {labelWithRequiredStar({ label: 'Email' })}
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="px-3 py-6"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {state?.emailError && (
            <span className="text-sm text-red-500">
              {state.emailError}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          {labelWithRequiredStar({ label: 'Message' })}
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Write your message here..."
            className="px-3 py-4 min-h-[120px]"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          {state?.messageError && (
            <span className="text-sm text-red-500">
              {state.messageError}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            type="submit"
            className="w-full py-6"
            size="lg"
            disabled={isPending}
          >
            {isPending ? 'Sending message...' : 'Send Message'}
          </Button>

          <Button
            type="reset"
            variant="outline"
            className="w-full py-6"
            size="lg"
            onClick={() =>
              setFormData({
                fullname: '',
                email: '',
                message: '',
              })
            }
          >
            Reset
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;