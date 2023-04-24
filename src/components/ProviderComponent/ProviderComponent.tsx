import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import styled from "styled-components"
import { ProviderComponentProps } from "./ProviderComponent.types"
import { Alert, Button } from "@material-tailwind/react"
import { Value } from "react-calendar/dist/cjs/shared/types"
import TimePicker from "react-time-picker"
import "react-time-picker/dist/TimePicker.css"
import "react-clock/dist/Clock.css"
import moment from "moment"
import { ACTIONS } from "@/hooks/hooks.types"

export const StyledCalendar = styled(Calendar)`
    color: #000;
    border-radius: 1rem;
    overflow: hidden;
    border: 0.1rem solid #eee;
    font-size: 0.85rem;
    margin-bottom: 1rem;
    .react-calendar__tile--now {
        background: #26a2a7;
        color: #fff;
        font-weight: bold;
        &:hover {
            background: #1fa970;
        }
    }
`

const ProviderComponent: React.FC<ProviderComponentProps> = (props) => {
    const [selectedDate, setSelectedDate] = useState<null | Value>(null)
    const [startTime, setStartTime] = useState<string>("8:00")
    const [endTime, setEndTime] = useState<string>("")
    const [show, setShow] = useState<boolean>(false)
    const { app, setApp } = props

    const submitHandler = () => {
        setShow(true)
        setApp({ type: ACTIONS.SET_SCHEDULE, day: selectedDate!.toString(), startTime, endTime })
    }

    return (
        <div className="border rounded-2xl w-10/12 2xl:w-6/12 px-8 py-4 my-4">
            <header className="text-2xl font-bold text-center">
                Greetings {app.provider.name}. What would you like to do today?
            </header>
            <nav className="block md:flex items-center justify-center gap-5 py-10">
                <div className="my-3 md:my-0 flex-1 text-center border rounded-2xl py-8">
                    <Button color="teal">Review Meetings</Button>
                </div>
                <div className="my-3 md:my-0 flex-1 text-center border rounded-2xl py-8">
                    <Button color="teal">Contact Client</Button>
                </div>
                <div className="my-3 md:my-0 flex-1 text-center border rounded-2xl py-8">
                    <Button color="teal">Request PTO</Button>
                </div>
            </nav>
            <main>
                <h2 className="mb-8 font-bold text-lg italic">
                    Please select the day and time you are available to work.
                </h2>
                <div className="block gap-5 md:flex">
                    <div className="flex-1">
                        <StyledCalendar
                            onChange={(e) => setSelectedDate(e)}
                            tileDisabled={({ activeStartDate, date, view }) => date < new Date()}
                        />
                    </div>
                    <div className="flex-grow">
                        {selectedDate ? (
                            <>
                                <div>
                                    You've selected{" "}
                                    <span className="font-bold">
                                        {moment(selectedDate.toString()).format("MMMM Do, YYYY")}
                                    </span>
                                    .
                                </div>
                                <div className="mt-5">What time will you be available?</div>
                                <div className="mt-5">
                                    <TimePicker
                                        className="text-xl"
                                        disableClock={true}
                                        clearIcon={null}
                                        value={startTime}
                                        minTime={"08:00"}
                                        onChange={(e) => setStartTime(e!)}
                                    />{" "}
                                    to{" "}
                                    <TimePicker
                                        className="text-xl"
                                        disableClock={true}
                                        clearIcon={null}
                                        minTime={startTime}
                                        value={endTime}
                                        onChange={(e) => setEndTime(e!)}
                                    />
                                </div>
                                <Button
                                    onClick={() => submitHandler()}
                                    disabled={!endTime}
                                    className="rounded-3xl mt-5"
                                    color="teal"
                                >
                                    Submit
                                </Button>
                            </>
                        ) : (
                            <div>Please select a valid date.</div>
                        )}
                    </div>
                </div>
                {show && <Alert color="green">You have successfully submitted your work schedule.</Alert>}
            </main>
        </div>
    )
}

export default ProviderComponent
