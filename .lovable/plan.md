

## Plan: Integrate EmailJS with Contact Form

Since these are **public keys** (EmailJS public key, template ID, service ID are designed to be used client-side), they can be stored directly in the codebase.

### Steps

1. **Install `@emailjs/browser` package** as a dependency.

2. **Update `ContactSection.tsx`**:
   - Import `emailjs` from `@emailjs/browser`
   - Replace the placeholder `handleSubmit` with an EmailJS `send` call using:
     - Service ID: `service_heularg`
     - Template ID: `template_9kuie7q`
     - Public Key: `ODvyZp_mPYBplX6Ca`
   - Send `name`, `email`, and `message` as template parameters
   - Add loading state to disable the button while sending
   - Show a toast notification on success/failure instead of `alert()`
   - Reset form on success

### Technical Details

The `handleSubmit` function will call:
```ts
emailjs.send('service_heularg', 'template_9kuie7q', {
  from_name: form.name,
  from_email: form.email,
  message: form.message,
}, 'ODvyZp_mPYBplX6Ca')
```

A `sending` state will be added to show a loading indicator and prevent double submissions. The existing `useToast` hook will provide success/error feedback.

