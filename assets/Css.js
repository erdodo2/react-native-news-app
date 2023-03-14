export default function Css(isDarkMode) {
    return{
        menu: {
            tintColor: isDarkMode? 'white': 'black',
        },
        modal:{
            backgroundColor: isDarkMode ? '#1e293b' : '#e2e8f0',
        },
        backgroundStyle: {
            backgroundColor: isDarkMode ? '#1e293b' : '#e2e8f0',
        },
        objectFit: {
            width: '100%',
            objectFit: 'cover',
            height: 200,
        }
    }
}
