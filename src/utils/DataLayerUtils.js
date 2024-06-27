import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DataLayerEventTracker = () => {
    const [pageCount, setPageCount] = useState(0);
    const [timer, setTimer] = useState(null);
    const location = useLocation();

    const pushToDataLayer = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'userActivity',
            'type': pageCount >= 6 ? 'pageView' : 'timer',
            'pageViewCount': pageCount
        });
        console.log('Event pushed to data layer', pageCount, timer);
    };

    const startTimer = () => {
        const timeout = setTimeout(pushToDataLayer, 180 * 1000);
        setTimer(timeout);
    };

    const handlePageCount = () => {
        setPageCount((prevCount) => {
            const newCount = prevCount + 1;
            if (newCount >= 7) {
                if (timer) clearTimeout(timer);
                pushToDataLayer();
            }
            return newCount;
        });
    };

    useEffect(() => {
        startTimer();
    }, []);

    useEffect(() => {
        handlePageCount();
    }, [location]);

    return null;
};

export default DataLayerEventTracker;