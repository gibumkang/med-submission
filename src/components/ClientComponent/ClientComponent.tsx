import { Button, Chip } from "@material-tailwind/react"
import React, { useState } from "react"
import { StyledCalendar } from "../ProviderComponent/ProviderComponent"
import { ClientComponentProps } from "./ClientComponent.types"
import moment from "moment"
import { Value } from "react-calendar/dist/cjs/shared/types"

const ClientComponent: React.FC<ClientComponentProps> = (props) => {
    const [selectedDate, setSelectedDate] = useState<Value | null>(null)
    const { app, setApp } = props

    const appointmentLogic = () => {
        if (
            moment().add(1, "days").format("MMMM Do, YYYY") >=
            moment(app.provider.availability.day.toString()).format("MMMM Do, YYYY")
        ) {
            return <div>We're sorry, you must select a date that is at least 24 hours in advance.</div>
        } else {
            return (
                <>
                    {" "}
                    <div>
                        You have selected{" "}
                        <span className="font-bold">{moment(selectedDate!.toString()).format("MMMM Do, YYYY")}</span>.
                    </div>
                    <div className="my-3 border-t-2 border-b-2 py-5 flex items-center">
                        <div>
                            <img
                                src={app.provider.image}
                                width="60"
                                height="60"
                                className="rounded-full"
                                alt={app.provider.name}
                            />
                        </div>
                        <div className="flex-grow">
                            <ul className="ml-3">
                                <li>{app.provider.name}</li>
                                <li className="text-sm text-gray-700">Pharmacist</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm">
                            {app.provider.name} is available that day between{" "}
                            <span className="font-bold">
                                {moment(app.provider.availability.startTime, "HH:mm").format("hh:mm A")}
                            </span>{" "}
                            and{" "}
                            <span className="font-bold">
                                {moment(app.provider.availability.endTime, "HH:mm").format("hh:mm A")}
                            </span>
                            .
                        </p>
                    </div>
                    <div>
                        <Button className="mt-5" color="teal">
                            Request Appointment
                        </Button>
                    </div>
                </>
            )
        }
    }

    return (
        <div className="border rounded-2xl w-10/12 2xl:w-6/12 px-8 py-4 my-4">
            <div className="bg-white px-6 sm:py-10 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-3 text-gray-900 sm:text-5xl">
                        Greetings, <span className="whitespace-nowrap">{app.client.name}</span>.
                    </h2>
                    <p className="text-md text-gray-600 mb-3">
                        Thank you for choosing AcmeMeds. You have requested to see a provider. Please select a valid
                        date below to book a virtual appointment.
                    </p>
                </div>
            </div>
            <main>
                <div className="block gap-5 md:flex">
                    <div className="flex-1">
                        <StyledCalendar
                            tileDisabled={({ activeStartDate, date, view }) =>
                                moment(date).format("MMM Do YY") !==
                                moment(app.provider.availability.day).format("MMM Do YY")
                            }
                            tileContent={({ activeStartDate, date, view }) =>
                                view === "month" &&
                                moment(date).format("MMM Do YY") ===
                                    moment(app.provider.availability.day).format("MMM Do YY") ? (
                                    <div className="relative bg-blue-100  h-1">&nbsp;</div>
                                ) : null
                            }
                            onChange={(e) => setSelectedDate(e)}
                            // value={value}
                            minDate={new Date()}
                        />
                    </div>
                    <div className="flex-1">
                        {app.provider.availability.day === "" && (
                            <>
                                <div>
                                    We're sorry, it appears there are no providers available at the moment. Please check
                                    again at a later time.
                                </div>
                                <div className="mt-5 text-sm text-gray-700">
                                    (You must first set an available date as a provider. To do this, first logout by
                                    click on the Profile icon on top right hand corner and select 'Sign Out'. Then,
                                    select Provider Login on the bottom right hand corner located in the footer.
                                    Finally, select a valid date/time and revisit once more as a client.)
                                </div>
                            </>
                        )}
                        {selectedDate && appointmentLogic()}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ClientComponent
