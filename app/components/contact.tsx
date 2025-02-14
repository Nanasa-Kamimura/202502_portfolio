import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>
        <form
          action="https://formspree.io/f/mrbeawqg" // ここにFormspreeのエンドポイントを入力
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <Input id="name" type="text" name="name" placeholder="Your name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" name="email" placeholder="your@email.com" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <Textarea id="message" name="message" placeholder="Your message" rows={4} required />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
