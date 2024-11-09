import React, { useState } from "react";

import { useTheme } from "styled-components";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { TouchableWithoutFeedback, View } from "react-native";

import { 
  Container, 
  ButtonFilter,
  ButtonFilterText,
  ModalContent
} from "./styles"; 
import { ptBR } from "./localeCalendar";

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br'; 

export default function CalendarModal({ setVisible, handleFilter }) {
  const theme = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState({});

  function handleOnDayPress(date) {
    setCurrentDate(new Date(date.dateString));

    let markedDate = {};

    markedDate[date.dateString] = {
      selected: true,
      selectedColor: theme.primary,
      textColor: theme.background
    }

    setSelectedDates(markedDate);
  }

  function handleFilterDate() {
    handleFilter(currentDate);
    setVisible();
  }

  return(
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{ flex:1 }} ></View>
      </TouchableWithoutFeedback>


      <ModalContent>

        <Calendar 
          onDayPress={handleOnDayPress}
          markedDates={selectedDates}
          enableSwipeMonths={true}
          theme={{
            calendarBackground: theme.backgroundVariant,
            todayTextColor: theme.primary, 
            selectedDayBackgroundColor: theme.primary,
            selectedDayTextColor: theme.background,
            textSectionTitleColor: theme.primary,
            dayTextColor: theme.textSecondary,
            textDisabledColor: theme.border,
            monthTextColor: theme.textSecondary,
            arrowColor: theme.textSecondary
          }}
          style={{
            marginBottom: 20,
          }}
        />

        <ButtonFilter onPress={handleFilterDate} >
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>

      </ModalContent>
    </Container>
  )
}