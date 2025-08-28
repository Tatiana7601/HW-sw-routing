import React, {useState} from 'react';

const EmailButton = ({email}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
        setIsOpen(false);
    }
    return (
        <div>
            <button className="btn btn-danger" onClick={openModal}>
                Email me
            </button>

            {isOpen && (
                <div className="modal-backdrop"  onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>About this project</h3>
                        <p>
                            This  project  was  created  in  collaboration  with  the Cohort-65m-fs group.
                            Special thanks to our mentor Andrei Shahnovich.
                        </p>
                        <button className="btn btn-primary" onClick={handleEmailClick}>
                            Send Email
                        </button>
                        <button className="btn btn-secondary" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmailButton;