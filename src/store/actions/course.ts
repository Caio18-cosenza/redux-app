export function toggleLesson(lesson: any, module: any) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson,
  };
}
