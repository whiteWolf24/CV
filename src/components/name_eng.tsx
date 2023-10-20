const Name_eng = () => {

    onresize = () => {
        //const content_name = document.querySelector(".content_name") as HTMLDivElement;
        if (window.innerHeight <= 230) {
            document.body.style.overflowY = "scroll";
        }
        else {
            if (!navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Mobi")) {
                document.body.style.overflowY = "hidden";
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    onload = () => {
        if (window.innerHeight <= 230) {
            document.body.style.overflowY = "scroll";
        }
        else {
            if (!navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Mobi")) {
                document.body.style.overflowY = "hidden";
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }


    return <div className="content">
        <div className="content_name">
            <h1 className="name_eng">GEORGE MARINOS</h1>
            <h2 className="job_eng">WEB_DEVELOPER</h2>
        </div>
    </div >
}

export default Name_eng;