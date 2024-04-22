import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "react-toastify";

import { CardType } from "@/type";
import {
  calculateDiploma,
  calculateMagister,
  calculateOverlapsByPoint,
  calculateOverlapsByYear,
} from "@/lib/utils";

import { useUser } from "@/context/testContext";

export function CardWithForm({
  documentType,
  teacherName,
  studentName,
  studentId,
  title,
  rate,
  year,
  type,
  cardData,
  checker,
}: CardType) {
  const { user } = useUser();

  return (
    <section>
      {type === "others" ? (
        <Card className="lg:w-[350px] w-full flex flex-col">
          <CardHeader>
            <CardTitle>{documentType}</CardTitle>
          </CardHeader>
          <CardContent>
            <section className="flex flex-col gap-4">
              <p> Нэр: {studentName}</p>
              <p> Оюутны дугаар: {studentId}</p>
              <p> Удирдсан багш: {teacherName}</p>
              <p> Төгссөн он: {year}</p>
              <p> Үнэлгээ: {rate}</p>
            </section>
          </CardContent>
        </Card>
      ) : (
        <Card className="mt-2">
          <CardHeader>
            <CardTitle>Багшийн мэдээлэл</CardTitle>
          </CardHeader>
          <CardContent>
            <section className="flex flex-col gap-4">
              <p> Нэр: {cardData[0].data.teacher}</p>
              <p> Нийт дипломын ажил: {calculateDiploma(cardData)}</p>
              <p> Нийт магистрын ажил: {calculateMagister(cardData)}</p>
              <p> Нийт докторын ажил: {calculateMagister(cardData)}</p>
              <div className="grid lg:grid-cols-3 gap-3 grid-cols-2">
                {cardData &&
                  calculateOverlapsByYear(cardData).map(
                    ([key, value], index) => (
                      <div key={index}>
                        <p>
                          {" "}
                          {key} он : <span>{value} </span>
                        </p>
                      </div>
                    )
                  )}
              </div>
              <div className="grid lg:grid-cols-3 gap-3 grid-cols-2">
                {cardData &&
                  calculateOverlapsByPoint(cardData).map(
                    ([key, value], index) => (
                      <div key={index}>
                        <p>
                          {key} үнэлгээ : <span>{value} </span>
                        </p>
                      </div>
                    )
                  )}
              </div>
            </section>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
