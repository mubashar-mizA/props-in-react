const Landing = (props) => {
    return (
        <div className="min-h-screen max-w-5xl flex items-center justify-center bg-gray-400 mx-auto">
            <div className="bg-blue-200 text-center lg:w-3/4 w-full lg:p-4 p-2">
                <p>This is landing page by {props.detail.name}</p>
                <p>
                    React props ko samajhne ke liye, aap yeh sochain ke props aik tarah ka data hai jo aik component se doosray component mein bheja jaata hai. Jab aap aik component ko kisi doosray component ke andar use kartay hain aur usay koi data ya values dena chahtay hain, to woh data "props" kehlata hai.
                </p>

                <code>
                    {`function Greeting(props) {
                        return <h1>Hello, {props.name}!</h1>;
                        }

                        function App() {
                        return <Greeting name="Ali" />;
                        }`}
                </code>

            </div>
        </div>
    )
}

export default Landing;
