import { AllQuestions } from '~/@types/Steps'

import { RootState } from '../store'

export const selectSteps = (state: RootState) => state.steps.steps

export const selectStepsSize = (state: RootState) => selectSteps(state).length

export const selectCurrentStepId = (state: RootState) => state.steps.currentStepId

export const selectCurrentStep = (state: RootState) => {
  const steps = selectSteps(state)
  const currentStepId = selectCurrentStepId(state)
  return steps.find(step => step.id === currentStepId)
}

const selectCurrentStepIndex = (state: RootState) => {
  const currentStepId = selectCurrentStepId(state)
  return selectSteps(state).findIndex(step => step.id === currentStepId)
}

export const selectHasNextStep = (state: RootState) => {
  const steps = selectSteps(state)
  const currentStepIndex = selectCurrentStepIndex(state)
  return !!steps[currentStepIndex + 1]
}

export const selectHasPreviousStep = (state: RootState) => {
  const steps = selectSteps(state)
  const currentStepIndex = selectCurrentStepIndex(state)
  return !!steps[currentStepIndex - 1]
}

export const selectIsLastStep = (state: RootState) => {
  const currentStepIndex = selectCurrentStepIndex(state)
  return currentStepIndex + 1 === selectStepsSize(state)
}

export const selectSubmitted = (state: RootState) => state.steps.submitted

export const selectAllQuestions = (state: RootState) => {
  const steps = selectSteps(state)
  return steps.reduce<AllQuestions>(
    (acc, step) => ({
      ...acc,
      ...step?.questions
    }),
    // @ts-expect-error
    {}
  )
}
