// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    s = s.replace(/!/g, "")
    return s;
};