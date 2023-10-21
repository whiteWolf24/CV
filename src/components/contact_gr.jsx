import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact_gr = () => {

    const form = useRef();

    const { handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;

    onload = () => {
        const email_form = document.querySelector(".email_form");
        const msg_form = document.querySelector(".msg_form");

        email_form.style.color = "black";
        msg_form.style.color = "black";
    }

    function submit_form(data, e) {
        e.preventDefault();

        const submit_butt = document.querySelector(".submit_butt");
        const success_message = document.querySelector(".success_message");

        submit_butt.classList.add("submit_butt_anime");
        return new Promise((resolve) => {
            setTimeout(() => {
                emailjs.sendForm("service_csf2yrt", "template_vz3nrl7", form.current, "vlmZE8H22O2e_lQFj")
                    .then(() => {
                        //console.log('Email sent successfully:', response);
                        submit_butt.classList.remove("submit_butt_anime");
                        e.target.reset();
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                resolve();
                success_message.removeAttribute("hidden");
            }, 4000);
        })
    }

    onresize = () => {
        if (window.innerHeight <= 430) {
            document.body.style.overflowY = "scroll";
        }
        else document.body.style.overflowY = "hidden";
    };

    if (window.innerHeight <= 430) {
        document.body.style.overflowY = "scroll";
    }
    else document.body.style.overflowY = "hidden";

    return <div className="content">
        <div className="content_contact" onAnimationStart={() => {
            if (navigator.userAgent.includes("Chrome") && navigator.userAgent.includes("Mobi")) {
                const content_contact = document?.querySelector(".content_contact");
                content_contact.style.cssText += "height: fit-content !important";
            }
        }}>
            <form className="contact_form" ref={form} onSubmit={handleSubmit(submit_form)} /*method="POST"  data-sitekey="vlmZE8H22O2e_lQFj"*/>
                <div>
                    <input className="email_form" type="email" name="email" placeholder="Email Επικοινωνίας" title=""
                        required onInput={() => {
                            const email_form = document.querySelector(".email_form");

                            if (email_form.value.length === 0 || email_form.value.trim() == "" || email_form.validity.typeMismatch) {
                                email_form.setCustomValidity("Συμπληρώστε αυτό το πεδίο με ένα έγκυρο email");
                            }
                            else email_form.setCustomValidity("");
                        }}

                        onload={() => {
                            const email_form = document?.querySelector(".email_form");
                            email_form.style.cssText += "width: 16rem !important";
                        }}
                    />
                </div>

                <div>
                    <textarea className="msg_form" name="message" placeholder="Μήνυμα" title="" required
                        onInput={() => {
                            const msg_form = document.querySelector(".msg_form");

                            if (msg_form.value.length === 0 || msg_form.value.trim() == "") {
                                msg_form.setCustomValidity("Συμπληρώστε αυτό το πεδίο");
                            }
                            else msg_form.setCustomValidity("");
                        }}

                        onload={() => {
                            const msg_form = document?.querySelector(".email_form");
                            msg_form.style.cssText += "width: 16rem !important";
                        }}
                    >
                    </textarea>
                </div>

                <button className="submit_butt" disabled={isSubmitting} type="submit" value="Send">
                    {isSubmitting}
                    Aποστολή</button>
                <p className="success_message" hidden>Μήνυμα εστάλη</p>
            </form>
        </div>
    </div>
}

export default Contact_gr;