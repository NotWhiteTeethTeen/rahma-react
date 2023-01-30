import MyButton from "./MyButton";
import Man from "../images/man-green-background.png";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse mx-auto items-center px-6 mt-10 space-y-o md:flex-row md:space-y-0">
                {/* Left item */}
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        Let's defeat hunger
                    </h1>
                    <p className="max-w-sm text-center text-center text-darkGrayishBlue md:text-left">
                        Rahmah Makan helps the needy by allowing people to donate food to our many
                        fridges located across Penang
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <MyButton text="Donate Now" to="donate"></MyButton>
                    </div>
                </div>

                {/* image */}
                <div className="md:w-1/2">
                    <img src={Man} alt=""></img>
                </div>
            </div>
        </section>
    );
}

export default Hero;