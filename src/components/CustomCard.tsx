import { useState } from "react";
import type { CardElement } from "../types";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function CustomCard({ cardProperties }: { cardProperties: CardElement }) {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter((currentCounter) => currentCounter + 1);
    setCounter((currentCounter) => currentCounter + 1);
    setCounter((currentCounter) => currentCounter + 1);
  }

  return (
    <Card className="w-full bg-white text-black p-6 rounded-lg shadow-md mt-1  grid grid-cols-1">
      <CardHeader >
        <CardTitle className="text-2xl ml-0">{cardProperties.title}</CardTitle>
      </CardHeader>
     <p className="flex gap-1 ml-3 items-center ">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy11cC1pY29uIGx1Y2lkZS10aHVtYnMtdXAiPjxwYXRoIGQ9Ik0xNSA1Ljg4IDE0IDEwaDUuODNhMiAyIDAgMCAxIDEuOTIgMi41NmwtMi4zMyA4QTIgMiAwIDAgMSAxNy41IDIySDRhMiAyIDAgMCAxLTItMnYtOGEyIDIgMCAwIDEgMi0yaDIuNzZhMiAyIDAgMCAwIDEuNzktMS4xMUwxMiAyYTMuMTMgMy4xMyAwIDAgMSAzIDMuODhaIi8+PHBhdGggZD0iTTcgMTB2MTIiLz48L3N2Zz4=" alt="" />
              99% positive reviews
            </p>

      <div className="flex gap-1 ml-3 ">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItaWNvbiBsdWNpZGUtdXNlciI+PHBhdGggZD0iTTE5IDIxdi0yYTQgNCAwIDAgMC00LTRIOWE0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiLz48L3N2Zz4=" alt="" width={40} />
        <span className="text-black mt-1">{cardProperties.mentorname}</span>
      </div>
      <CardContent>
        <CardDescription className="text-black">
          {cardProperties.description}
        </CardDescription>
      </CardContent>
      <h3>Highlights</h3>
      <div className="p-4 bg-blue-300 rounded">
        <span className="text-black">1 year experience</span>

      </div>
      <CardFooter>
        <Button onClick={handleButtonClick} variant="secondary" className="text-white bg-black rounded-2xl w-full m-auto hover:bg-black text-white transition-colors">
          Schedule a Call
        </Button>
        <span className="ml-2">{counter}</span>
      </CardFooter>
    </Card>
  );
}

export default CustomCard;
