//Birthday countdown code

function daysLeft() {
    const today = new Date();
    const target = new Date('2026-07-05');
    const timeDifference = target - today;
    const dayDifference = Math.ceil(timeDifference / (1000* 60 * 60 *24));

document.getElementById('birthday').textContent = `Tage übrig bis zu meinem Geburtstag am 5. Juli: ${dayDifference} Tage !`;
}

daysLeft();