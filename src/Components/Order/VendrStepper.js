import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StepConnector from '@material-ui/core/StepConnector';

const VendrStyle = withStyles({
  active : {
    '& $line' : {
      borderColor : '#FFE01B'
    }
  },
  completed : {
    '& $line' : {
      borderColor : '#FFE01B'
    }
  },
})(StepConnector)
const useVendrStyles = makeStyles({
  active : {
    backgroundColor : '#FFE01B',
    borderRadius: '50%',
   
  },
  completed : {
    backgroundColor : '#FFE01B',
    borderRadius: '50%'
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: '50%',
    backgroundColor: '#FFE01B',
  },
  line : {
    borderLeftColor : '#FFE01B'
  }
})

function VendrStepIcon(props) {
  const classes = useVendrStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Awaiting confirmation ', 'Order confirmed', 'Driver assigned', 'Driver at the resturant', `On it's way'`, 'The driver is nearby', 'Enjoy your food'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `The merchant will confirm your order soon`;
    case 1:
      return 'Thumbs up for the merchant';
    case 2:
      return `They have been told about your order, they are on it`;
      case 3 : 
      return 'They are ready to pick up your order'
    default:
      return '';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
   const handleReset = () => {
     setActiveStep(0)
   }
  return (
    <div className={classes.root}>
      <hr/>
      <Stepper activeStep={activeStep} connector={<VendrStyle />} orientation="vertical" >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={VendrStepIcon}>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
              <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
