'use client';

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRef, useEffect, useContext } from 'react';

const TransitionContext = React.createContext({
  parent: {},
  shouldTransition: true,
});

function Transition({
  timeout,
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  appear,
  children,
}) {
  const enterClasses = enter.split(' ').filter((s) => s.length);
  const enterFromClasses = enterFrom.split(' ').filter((s) => s.length);
  const enterToClasses = enterTo.split(' ').filter((s) => s.length);
  const leaveClasses = leave.split(' ').filter((s) => s.length);
  const leaveFromClasses = leaveFrom.split(' ').filter((s) => s.length);
  const leaveToClasses = leaveTo.split(' ').filter((s) => s.length);

  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }

  const { parent, shouldTransition } = useContext(TransitionContext);
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
  }, []);

  const isParent = show !== undefined;
  const isChild = !isParent;
  const isInitialRender = mounted.current === false;

  let entranceTransitionsEnabled =
    parent.isInitialRender && parent.show && !parent.appear ? false : true;

  let childTransitionsEnabled = isParent
    ? isInitialRender && show && !appear
      ? false
      : true
    : shouldTransition;

  return (
    <TransitionContext.Provider
      value={{
        shouldTransition: childTransitionsEnabled,
        parent: {
          show,
          isInitialRender,
          appear: isChild ? entranceTransitionsEnabled : appear,
        },
      }}
    >
      <CSSTransition
        appear={isChild ? entranceTransitionsEnabled : appear}
        unmountOnExit
        in={isChild ? parent.show : show}
        addEndListener={(node, done) => {
          if (timeout) {
            setTimeout(done, timeout);
            return;
          }
          node.addEventListener('transitionend', done, false);
        }}
        onEnter={(node) => {
          addClasses(node, [...enterClasses, ...enterFromClasses]);
        }}
        onEntering={(node) => {
          removeClasses(node, enterFromClasses);
          addClasses(node, enterToClasses);
        }}
        onEntered={(node) => {
          removeClasses(node, [...enterToClasses, ...enterClasses]);
        }}
        onExit={(node) => {
          addClasses(node, [...leaveClasses, ...leaveFromClasses]);
        }}
        onExiting={(node) => {
          removeClasses(node, leaveFromClasses);
          addClasses(node, leaveToClasses);
        }}
        onExited={(node) => {
          removeClasses(node, [...leaveToClasses, ...leaveClasses]);
        }}
      >
        {children}
      </CSSTransition>
    </TransitionContext.Provider>
  );
}

export default Transition;
