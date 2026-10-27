import {beforeEach,describe,expect,it,vi} from "vitest";
import {createHmac} from "node:crypto";
import {compileLesson,evaluateExpression} from "../lib/lessonscript";
beforeEach(()=>{vi.unstubAllGlobals();process.env.SESSION_SECRET="test-session-secret-with-at-least-32-characters";process.env.TWITCH_WEBHOOK_SECRET="test-webhook-secret-with-at-least-32-characters";});
describe("LessonScript language",()=>{
 it("keeps rational arithmetic exact",()=>expect(evaluateExpression("1/3 + 1/6")).toBe("1/2"));
 it("implements precedence and unary minus",()=>expect(evaluateExpression("-(2+3) * 4 / 2")).toBe("-10"));
 it("reports source lines on errors",()=>expect(()=>compileLesson('title "Fractions"\nexercise "Divide" = 2/0')).toThrow("Line 2: Division by zero"));
 it("rejects executable JavaScript",()=>expect(()=>compileLesson('exercise "Oops" = process.exit()')).toThrow("Expected an integer"));
 it("limits nesting and numeric work",()=>{expect(()=>evaluateExpression("(".repeat(25)+"1"+")".repeat(25))).toThrow("nested");expect(()=>evaluateExpression("999999999 * 999999999 * 999999999")).toThrow("limit");});
});
