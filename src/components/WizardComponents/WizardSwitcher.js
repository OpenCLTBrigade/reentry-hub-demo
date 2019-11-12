import React from 'react';
import PropTypes from 'prop-types';

const WizardContext = React.createContext();
export const WizardProvider = WizardContext.Provider;
export const WizardConsumer = WizardContext.Consumer;

/**
 * Context provider for the wizard form.
 * @prop {func} validate handles validation for the overall form. Passed all current values as param.
 * @prop {func} skips handles page skipping. Passed current values and current page.
 */
class WizardSwitcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: undefined,
      pageIds: undefined,
      progress: 0,
      disableSubmit: false,
      isLastPage: false,
      isFirstPage: true,
      apiError: undefined,
      apiMessage: undefined,
      slideIn: true,
      slideDirection: 'left',
      values: this.props.initialValues || {},
      errors: {},
      visitedPages: []
    }

    this.pageIds = [];
  }

  componentDidMount() {
    this.setState({
      page: this.pageIds[0],
      pageIds: this.pageIds,
      isLastPage: (this.pageIds.length === 1) ? true : false
    })
  }

  recordWizardPageIds = (id) => {
    if (this.pageIds.includes(id)) {
      return;
    }
    else {
      this.pageIds.push(id)
    }
  }

  nextPage = () => {
    let stateUpdates = { isFirstPage: false };
    let values = this.state.values;
    const currentPageIndex = this.state.pageIds.indexOf(this.state.page) + 1;

    Object.keys(values).map(k => {
      if (Array.isArray(values[k])) {
        return values[k]
      } else {
        if (values[k]) {
          values[k] = values[k].trim()
        }
        return values[k]
      }
    });

    this.setState({ values })

    // For paper sliding animation
    this.setState({ slideIn: true, slideDirection: 'left' })

    // Handles page skipping
    let nextPage = this.state.pageIds[Math.min(currentPageIndex, this.state.pageIds.length)];
    if (this.props.skips) {
      let skipTo = this.props.skips(this.state.values, this.state.page, this.props);

      if (skipTo !== undefined) {
        nextPage = skipTo;
      }
    }
    stateUpdates.page = nextPage;
    let nextPageIndex = this.state.pageIds.indexOf(nextPage);

    // Adds current page to the page history
    let tempVisitedPages = this.state.visitedPages;
    tempVisitedPages.push(this.state.page);
    stateUpdates.visitedPages = tempVisitedPages;

    // Determines value for progress bar.
    let progress = Math.floor((100 / this.state.pageIds.length) * nextPageIndex);
    stateUpdates.progress = progress;
    let secondToLastPageId = this.state.pageIds[this.state.pageIds.length - 2]
    if (this.state.page === secondToLastPageId) {
      stateUpdates.progress = 100;
      stateUpdates.isLastPage = true;
    }

    this.setState(stateUpdates);
  }

  previousPage = () => {
    let stateUpdates = { isLastPage: false };

    // For paper sliding animation
    this.setState({ slideIn: true, slideDirection: 'right' })

    // Removes most recent page from history and sets current page to that.
    // Allows page skipping to work.
    let tempVisitedPages = this.state.visitedPages;
    let previousPage = tempVisitedPages.pop();
    let previousPageIndex = this.state.pageIds.indexOf(previousPage)
    stateUpdates.page = previousPage;

    // Determines value for progress bar
    let progress = Math.floor((100 / this.state.pageIds.length) * previousPageIndex);
    stateUpdates.progress = progress;
    let secondToFirstPage = this.state.pageIds[1]
    if (this.state.page === secondToFirstPage) {
      stateUpdates.isFirstPage = true;
      stateUpdates.progress = 0;
    }

    this.setState(stateUpdates);
  }

  // Handles how checkboxes are recorded. We add all values to an array, and add/remove values as needed.
  recordCheckboxValues = (name, value) => {
    let stateValue = (this.state.values[name] === undefined) ? [] : this.state.values[name];

    if (stateValue.includes(value)) {
      // Remove existing value from array
      let index = stateValue.indexOf(value);
      if (index > -1) {
        stateValue.splice(index, 1);
      }
    }
    else {
      stateValue = [...stateValue, ...Array(value)];
    }

    return stateValue;
  }

  // Handles recording text fields, and radio buttons.
  recordValues = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    
    if (event.target.type === 'checkbox') {
      value = this.recordCheckboxValues(name, value);
    }

    let fieldValue = { [name]: value };
    let stateValues = {...this.state.values, ...fieldValue}
    this.setState({ values: stateValues });
  }

  // If the validate prop is specified, run it and add all errors.
  // Returns true if there are errors, false if not.
  runValidation = () => {
    if (Boolean(this.props.validate)) {
      const returnedErrors = this.props.validate(this.state.values, this.state.page, this.props)
      if (Object.keys(returnedErrors).length > 0) {
        const stateErrors = {...this.state.errors, ...returnedErrors}
        this.setState({ errors: stateErrors });
        return true;
      }
      else {
        this.setState({ errors: {}})
        return false;
      }
    }
  }

  // Handles closing the snackbar component.
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ apiError: undefined, apiMessage: undefined })
  }

  // Method that is called on submission of the form.
  // API calls can be made here.
  onSubmit = (e) => {
    e.preventDefault() // Prevents form from automatically redirecting
    if (!this.runValidation()) {
      this.setState({ disableSubmit: true })
      if (this.props.submit) {
        this.props.submit(this.props, this.state, { updateState: this.updateState })
      }
    }
  }

  // Method that is called when a user presses a key on the form.
  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents calling onSubmit with the enter key

      // Enter key now calls the next page
      if (!this.state.isLastPage) {
        if (!this.runValidation()) {
          this.nextPage()
        }
      }
    }
  }

  collectBulkValues = (valuesObject) => {
    const combinedValues = {...this.state.values, ...valuesObject};
    this.setState({ values: combinedValues });
  }

  render() {
    return (
      <WizardProvider value={{
        pathCode: this.props.pathCode,
        nextPage: this.nextPage,
        previousPage: this.previousPage,
        page: this.state.page,
        progress: this.state.progress,
        submitDisabled: this.state.disableSubmit,
        isLastPage: this.state.isLastPage,
        isFirstPage: this.state.isFirstPage,
        recordValues: this.recordValues,
        values: this.state.values,
        errors: this.state.errors,
        runValidation: this.runValidation,
        apiError: this.state.apiError,
        apiMessage: this.state.apiMessage,
        handleSnackbarClose: this.handleClose,
        slideIn: this.state.slideIn,
        slideDirection: this.state.slideDirection,
        collectBulkValues: this.collectBulkValues,
        recordWizardPageIds: this.recordWizardPageIds
      }}>
        <form onSubmit={this.onSubmit} onKeyPress={this.onKeyPress}>
            {this.props.children}
        </form>
      </WizardProvider>
    )
  }
}

WizardSwitcher.propTypes = {
  validate: PropTypes.func,
  skips: PropTypes.func
}

export default WizardSwitcher;