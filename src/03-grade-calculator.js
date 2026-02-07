/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */
export function calculateGrade(score, hasExtraCredit) {
  // Your code here
  var grade;
  var marks = score;
  if (marks < 0 || marks > 100 || typeof marks != "number") return "INVALID";

  if (hasExtraCredit) {
    marks = marks + 5;
    if (marks > 100) {
      marks = 100;
    }
  }
  if (marks >= 0 && marks <= 59) {
    return "F";
  } else if (marks >= 60 && marks <= 69) {
    return "D";
  } else if (marks >= 70 && marks <= 79) {
    return "C";
  } else if (marks >= 80 && marks <= 89) {
    return "B";
  } else if (marks >= 90 && marks <= 100) {
    return "A";
  }
}
