import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact - Changhyun Cho",
    description: "Get in touch.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-300 font-mono selection:bg-teal-500/30 selection:text-teal-200 p-6 md:p-12 lg:p-24">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <header className="mb-12 border-b border-zinc-800 pb-6">
                    <Link href="/" className="text-xs text-zinc-500 hover:text-teal-500 mb-4 block">
                        ← ../index
                    </Link>
                    <h1 className="text-2xl font-bold text-zinc-100">Contact</h1>
                </header>

                <section>
                    <p className="text-zinc-400 mb-8">
                        Send a message. <span className="text-red-500">*</span> Required fields.
                    </p>

                    <div className="
            [&_input]:bg-zinc-900 [&_input]:text-zinc-200 [&_input]:border-zinc-800 [&_input]:rounded-none [&_input]:font-mono [&_input:focus]:border-teal-500 [&_input:focus]:ring-0
            [&_textarea]:bg-zinc-900 [&_textarea]:text-zinc-200 [&_textarea]:border-zinc-800 [&_textarea]:rounded-none [&_textarea]:font-mono [&_textarea:focus]:border-teal-500 [&_textarea:focus]:ring-0
            [&_.text-text]:text-zinc-400 [&_.text-text]:font-mono [&_.text-text]:text-sm
            [&_.bg-ui\/30]:bg-transparent [&_.bg-ui\/30]:p-0 [&_.bg-ui\/30]:gap-4 [&_.bg-ui\/30]:mb-6
            [&_button]:bg-zinc-100 [&_button]:text-zinc-900 [&_button]:font-bold [&_button]:rounded-none [&_button]:border-0 [&_button]:hover:bg-teal-500 [&_button]:hover:text-white [&_button]:transition-colors
            [&_button]:shadow-none [&_button]:w-full [&_button]:md:w-auto
            [&_.text-xs]:text-zinc-600
            [&_a]:text-teal-500 [&_a]:no-underline [&_a]:hover:underline
          ">
                        <ContactForm />
                    </div>
                </section>
            </div>
        </main>
    );
}
