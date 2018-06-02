import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';
import {sortByDate,setStartDate,setEndDate} from '../actions/filters';
import {sortByAmount} from '../actions/filters';
import {DateRangePicker} from 'react-dates';


//Here we are going to implement the filters with Text input ,here we need to update the store , so guess what we need , STORE , to connect to store , we need connect() 
// connect returns a function which takes component as a parameter, connect takes a function as argument that determines what infomation of the store we want component to access , this function takes "store state" as first argument. 


//when you connect a component with redux , you get some other information as well i.e dispatch , here we have access to dispatch also which can dispatch actions to redux store
class ExpenseListFilters extends React.Component {
    state = {
        calendarFocussed : null
    };
    onDatesChange = ({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocussed)=>{
        this.setState(()=>({calendarFocussed}));
    }
    render(){
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={(e)=>{
                this.props.dispatch(setTextFilter(e.target.value));
                //console.log(e.target.value);
            }}/>
            <select value={this.props.filters.sortBy} onChange={(e)=>{
                
                    if(e.target.value==='date'){
                        this.props.dispatch(sortByDate());
                    }
                    else if(e.target.value==='amount'){
                        this.props.dispatch(sortByAmount());
                    }
                
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
        
            </select>
            <DateRangePicker
             startDate = {this.props.filters.startDate}
             endDate = {this.props.filters.endDate}
             onDatesChange = {this.onDateChange}
             focusedInput = {this.state.calendarFocussed}
             onFocusChange = {this.onFocusChange}
             showClearDates={true}
             numberOfMonths={1}
             isOutsideRange={()=>false}

             />
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return {
        filters : state.filters
    }

}

export default connect(mapStateToProps)(ExpenseListFilters);

