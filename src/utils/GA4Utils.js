// export const pushGA = () => {
//     window.dataLayer = window.dataLayer || [];
//     var pageViewCount = 0;
//     var timeout = setTimeout(() => {
//         fireDataLayerPush(pageViewCount);
//     }, 10000)
//     updatePageViewCount(pageViewCount, timeout);
// }

// const fireDataLayerPush = (pageViewCount) => {
//     window.dataLayer.push({
//         'event': 'userActivity',
//         'type': pageViewCount >= 6 ? 'pageView' : 'timer',
//         'pageViewCount': pageViewCount
//     });
//     console.log('pushed event', pageViewCount)
// }

// const updatePageViewCount = (pageViewCount, timeout) => {
//     pageViewCount++;
//     if (pageViewCount >= 6) {
//         fireDataLayerPush(pageViewCount);
//         clearTimeout(timeout);
//     }
// }











// const checkAndFireEvent = (eventFired, pageViewCount, timeout) => {
//     if(!eventFired) {
//         eventFired = true;
//         fireDataLayerPush(pageViewCount);
//         clearTimeout(timeout);
//     }
// };