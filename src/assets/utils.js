export const Theme = {
  mainColor: 'hsl(230deg 35% 37%)',
  secondaryColor: 'hsl(223deg 31% 20%)',
  thirdColor: 'hsl(224deg 36% 15%)',
};

export function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}