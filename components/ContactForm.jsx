"use client"

const ContactWrapper = ({ children }) => {
    return (
        <div className="bg-ui/30 px-4 py-3 my-2 first:mt-0 last:mb-0; flex flex-row rounded-sm gap-5 text-sm">
            {children}
        </div>
    )
}

const minLabelWidth = "min-w-16"

const ContactField = ({ label, placeholder, onChange }) => {
    return (
        <ContactWrapper>
            <div className={`${minLabelWidth} text-text font-bold`}>{label}</div>
            <input type="text" className="flex-1 focus:outline-0" placeholder={placeholder} />
        </ContactWrapper>
    )
}

const ContactTextarea = ({ label, placeholder, onChange }) => {
    return (
        <ContactWrapper>
            <div className={`${minLabelWidth} text-text font-bold`}>{label}</div>
            <textarea type="text" className="flex-1 focus:outline-0 min-h-30" placeholder={placeholder}/>
        </ContactWrapper>
    );
}

const ContactForm = () => {
    return (
        <div className="">
            <form>
            <ContactField label="Name" placeholder="Enter Your Name" />
            <ContactField label="E-mail" placeholder="Enter You E-mail" />
            <ContactTextarea label="Content" placeholder="" />
            </form>
        </div>
    )
}

export default ContactForm;