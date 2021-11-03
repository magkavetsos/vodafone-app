const phoneValidation = (phone) => {
    if (phone && /^[+\d-]+$/.test(phone)) { //TODO fix multiple +
        if (phone[0] === '+') {
            if (phone.length === 13 && phone[0] === '+' && phone[1] === '3' && phone[2] === '0' && (phone[3] === '2' || phone[3] === '6')) {
                return true;
            }
        } else {
            if (phone.length === 10 && (phone[0] === '2' || phone[0] === '6')) {
                return true;
            }
        }
    }
    return false;
}

export default phoneValidation;