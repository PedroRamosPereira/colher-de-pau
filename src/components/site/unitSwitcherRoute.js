export function getUnitSwitchTarget(pathname, unitRoute) {
  if (pathname === "/" || pathname === unitRoute) {
    return null;
  }

  return unitRoute;
}
