"use client"

import { useState } from "react"
import confetti from "canvas-confetti";


const ContactWrapper = ({ children }) => {
    return (
        <div className="bg-ui/30 select-none px-4 py-3 my-2 first:mt-0 last:mb-0 flex flex-row rounded-sm gap-5 text-sm">
            {children}
        </div>
    )
}

const minLabelWidth = "min-w-2/7 md:min-w-30"

const ContactField = ({ label, placeholder, value, onChange }) => {
    return (
        <ContactWrapper>
            <div className={`${minLabelWidth} text-text font-bold`}>{label}</div>
            <input
                type="text"
                className="flex-1 focus:outline-0"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </ContactWrapper>
    )
}

const ContactTextarea = ({ label, placeholder, value, onChange }) => {
    return (
        <ContactWrapper>
            <div className={`${minLabelWidth} text-text font-bold`}>{label}</div>
            <textarea
                className="flex-1 focus:outline-0 min-h-30"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </ContactWrapper>
    )
}


function firePersistentConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
    };

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }

        const particleCount = 50 * (timeLeft / duration);

        // 좌/우 랜덤 포인트에서 뿌림
        confetti({
            ...defaults,
            particleCount,
            origin: {
                x: randomInRange(0.1, 0.3),
                y: Math.random() - 0.2,
            },
        });
        confetti({
            ...defaults,
            particleCount,
            origin: {
                x: randomInRange(0.7, 0.9),
                y: Math.random() - 0.2,
            },
        });
    }, 250);
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}


const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [consent, setConsent] = useState(true) // 기본값 true로 유지할게요
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 중복 제출 방지
        if (isSubmitting) return;
    
        // 유효성 검사
        if (!name || !email || !content) {
            alert("Name, E-mail, and Content are required.");
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        if (!consent) {
            alert("You must agree to the data collection policy.");
            return;
        }

        const formData = {
            name,
            email,
            title,
            content,
        };

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.success) {
                // alert("Your message has been sent successfully!");

                 // 🎉 여기서 폭죽 터뜨림
                // confetti({
                //     particleCount: 150,
                //     spread: 100,
                //     origin: { y: 0.6 },
                // })
                firePersistentConfetti();

                setName("");
                setEmail("");
                setTitle("");
                setContent("");
            } else {
                alert("Failed to send your message. Please try again later.");
                console.error(result.error);
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            alert("An error occurred while sending your message.");
        } finally {
            setIsSubmitting(false);
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ContactField
                    label="Full Name"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <ContactField
                    label="E-mail Address"
                    placeholder="Enter Your E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ContactField
                    label="Subject"
                    placeholder="Enter Subject (optional)"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <ContactTextarea
                    label="Message"
                    placeholder="Write your message here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <div className="text-xs mb-5 text-text/50">
                    I consent to the collection of my email and name. You have the right to refuse, but please note that if you do not consent, access to the service may be restricted.
                    <br />
                    <a href="/privacy" className="underline hover:text-text transition-colors">
                        View Privacy Policy →
                    </a>
                </div>

                <div className="flex flex-row-reverse">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex flex-row gap-1 w-38 justify-center items-center pl-2 pr-4 py-2 border-1 rounded-sm select-none
                                    bg-gradient-to-r from-primary/90 to-accent/90 border-primary/50 text-white font-semibold
                                    hover:rounded-xl hover:from-primary hover:to-accent hover:scale-105
                                    transition-all duration-300 active:scale-98 shadow-md
                                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241z"/></g>
                        </svg>
                        <span>{isSubmitting ? 'Sending...' : 'Agree & Send'}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
