export default function FormAction(props){
    const {
        handleSubmit,
        type = 'Button',
        action = 'submit',
        text
    } = props;
    return (
        <>
            {type === 'Button' ? (
                <button
                    type={action}
                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onSubmit={handleSubmit}
                >
                    {text}
                </button>
            ) : (
                <></>
            )}
        </>
    )
}