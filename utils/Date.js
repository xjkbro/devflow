export function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}
export function isoFormatDMY(d) {
    function pad(n) {
        return (n < 10 ? "0" : "") + n;
    }
    return (
        pad(d.getUTCMonth() + 1) +
        "/" +
        pad(d.getUTCDate()) +
        "/" +
        d.getUTCFullYear()
    );
}
