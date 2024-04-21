import {useState, useEffect, useCallback} from 'react'

//(min-width: 768px)
export default function useQuery(query) {

    const [matches, setMatches] = useState(false)

    const handleChange = (e) => setMatches(e.matches)

    
    useEffect(() => {
        const m = window.matchMedia(query)

        setMatches(m.matches)

        m.addEventListener('change', handleChange);

        return () => {
            m.removeEventListener('change', handleChange);
        }
    }, []);

    const useQueryCall = useCallback((query) => {
        window.matchMedia(query)
    }, []);

    return [!matches, useQueryCall];
}
