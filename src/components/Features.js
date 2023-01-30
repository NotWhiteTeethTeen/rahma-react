const Features = () => {
    return(
        <section id="features">
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                {/* whats different */}
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        How can you help?
                    </h2>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        We strive to make sure no one sleeps hungry.
                        We have fridges spread across Penang.
                    </p>
                </div>

                {/* numbered list */}
                <div>

                </div>
            </div>
        </section>
    );
}

export default Features;