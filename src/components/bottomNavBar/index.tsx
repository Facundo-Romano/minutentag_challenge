import styles from './index.module.css';

export default function BottomNavBar() {

    return (
        <div className={styles.container}>
             <svg
                className={styles.active}
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="#ff9f24">¡
                    <path d="M12.97 2.59a1.5 1.5 0 00-1.94 0l-7.5 6.363A1.5 1.5 0 003 10.097V19.5A1.5 1.5 0 004.5 21h4.75a.75.75 0 00.75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 001.5-1.5v-9.403a1.5 1.5 0 00-.53-1.144l-7.5-6.363z" />
            </svg>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="#a0a0a0">
                    <path d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5zM5 19V5h14l.002 14H5z" />
                    <path d="M7 7h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6z" />
            </svg>
            <svg 
                viewBox="0 0 15 15" 
                width={24}
                height={24}>
                    <path fill="#a0a0a0" d="M2.401 6.39l-.497-.056.497.056zm-.778 7l.497.055-.497-.055zm11.754 0l-.497.055.497-.055zm-.778-7l.497-.056-.497.056zM1.904 6.334l-.778 7 .994.11.778-7-.994-.11zM2.617 15h9.766v-1H2.617v1zm11.257-1.666l-.778-7-.994.11.778 7 .993-.11zM11.604 5H3.396v1h8.21V5zm1.492 1.334A1.5 1.5 0 0011.605 5v1a.5.5 0 01.497.445l.994-.11zM12.383 15a1.5 1.5 0 001.49-1.666l-.993.11a.5.5 0 01-.497.556v1zM1.126 13.334A1.5 1.5 0 002.617 15v-1a.5.5 0 01-.497-.555l-.994-.11zm1.772-6.89A.5.5 0 013.395 6V5a1.5 1.5 0 00-1.49 1.334l.993.11zM5 4v-.5H4V4h1zm5-.5V4h1v-.5h-1zM7.5 1A2.5 2.5 0 0110 3.5h1A3.5 3.5 0 007.5 0v1zM5 3.5A2.5 2.5 0 017.5 1V0A3.5 3.5 0 004 3.5h1z" />
            </svg>
            <svg
                viewBox="0 0 16 16"
                width={24}
                height={24}
                fill="#a0a0a0">
                <path fillRule="evenodd" d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
        </div>
    );
};