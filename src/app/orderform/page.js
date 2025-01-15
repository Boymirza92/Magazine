"use client";
import styled from "styled-components";
import Header from "../components/header/navbar/page";
import Footer from "../components/footer/page";

const InfoWrapper = styled.div`
  background-color: #f6f8f3;
  font-family: arial, sans-serif;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 3.8rem;
  background-color: rgb(200, 210, 221);
  padding-right: 10rem;
  margin-top: 4.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 10rem;
    width: 100%;
    margin-top: 2rem;
    padding-left: 10rem;
  }
`;

const NavbarUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding-right: 20rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 3.5rem;
    align-items: center;
    justify-content: center;
  }
`;

const NavbarLi = styled.li`
  margin: 0 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  font-family: sans-serif;
  letter-spacing: 1px;
  font-size: 11px;

  &:hover {
    color: #9b59b6;
    transition: color 0.3s, border-color 1s, text-shadow 0.3s;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Section = styled.div`
  width: 100%;
  padding: 2rem;
`;
//Sarlavha
const TextH1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FormWrapper = styled.div`
  gap: 1.5rem;
  width: 50%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin: 0;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-right: 0;
    padding-left: 0;
    margin: 0;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin: 0;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;

  @media (max-width: 768) {
    font-size: 12px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 768px) {
  height: 2.5rem;
    width: 80%; /* Ekran kichrayganda to'liq kenglik */
    padding: 0;
    margin: 0;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 80%; /* Ekran kichrayganda to'liq kenglik */
    height: 2.5rem;
  }
`;

const Option = styled.option`
  font-size: 14px;
`;

const FullWidthForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const TextForm = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Kichik ekranlarda font o'lchamini kichraytirish */
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;

  &:checked {
    background: radial-gradient(circle, red, blue);
    border-color: rgb(11, 43, 78);
  }
`;

const ButtonFile = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  align-items: center;
  height: 2.3rem;
  padding: 1rem;
  margin-top: 1.5rem;
  font-size: 0.8rem;
  background-color: #9b59b6;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #7a4791;
  }

  @media (max-width: 768px) {
    width: 100%; /* Ekran kichrayganda butonni to'liq kenglikda qilish */
    margin-top: 1rem;
  }
`;

const BottomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  font-size: 1.5rem;
  border: none;
  background-color: inherit;
  font-weight: bold;

  &:hover {
    color: blue;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

const OrderForm = () => {
  return (
    <InfoWrapper>
      <Header />
      <Navbar>
        <NavbarUl>
          <NavbarLi>ГЛАВНАЯ ➡</NavbarLi>
          <NavbarLi>КЛИЕНТАМ ➡</NavbarLi>
          <NavbarLi style={{ width: "15rem" }}>
            ДОКУМЕНТЫДЛЯ ДЛЯ ДОГОВОРА ➡
          </NavbarLi>
        </NavbarUl>
      </Navbar>
      <Section>
        <TextH1>Запрос ставки и условий погрузочно-разгрузочных работ</TextH1>
        <FormWrapper>
          <Form>
            <FormRow>
              <Label htmlFor="fname">Наименовие груза *</Label>
              <Input type="text" id="fname" name="fname" />
            </FormRow>
            <FormRow>
              <Label htmlFor="unit">Ед. измерения*</Label>
              <Select id="unit" name="unit">
                <Option value="kg">Kilogram</Option>
                <Option value="m">Meter</Option>
                <Option value="l">Liter</Option>
                <Option value="pc">Piece</Option>
              </Select>
            </FormRow>
            <FormRow>
              <Label htmlFor="aname">Пункт назначения перевозки</Label>
              <Input type="text" id="aname" name="lname" />
            </FormRow>
            <FormRow>
              <Label htmlFor="unit">Груз поступает в порт</Label>
              <Select id="unit" name="unit">
                <Option value="a">Контейнер</Option>
                <Option value="b">Животные</Option>
                <Option value="s">Продукты питания</Option>
                <Option value="d">Электроника</Option>
                <Option value="c">Другие</Option>
              </Select>
            </FormRow>
            <FormRow>
              <Label htmlFor="cname">Размер судовой партии</Label>
              <Input type="text" id="cname" name="lname" />
            </FormRow>
            <FormRow>
              <Label htmlFor="dname">Дополнительная информация о грузо:</Label>
              <Input type="text" id="dname" name="lname" />
            </FormRow>
            <FormRow>
              <Label htmlFor="f">Размер партия *</Label>
              <Input type="text" id="fname" name="fname" />
            </FormRow>
            <FormRow>
              <Label htmlFor="unit">Направления реревозки *</Label>
              <Select name="transportDirection" id="transportDirection">
                <Option value="sea">Морской транспорт</Option>
                <Option value="rail">Железнодорожный транспорт</Option>
                <Option value="road">Автомобильный транспорт</Option>
                <Option value="air">Воздушный транспорт</Option>
                <Option value="combined">Комбинированный транспорт</Option>
                <Option value="domestic">
                  Внутренние перевозки (по стране)
                </Option>
                <Option value="international">Международные перевозки</Option>
                <Option value="regional">Перевозки по региону</Option>
                <Option value="sea_international">
                  Международные перевозки по морю
                </Option>
                <Option value="transit">Транзитные перевозки</Option>
                <Option value="express">Экспресс-доставка</Option>
                <Option value="standard">Стандартная доставка</Option>
                <Option value="temperature">
                  Транспортировка с температурным режимом
                </Option>
                <Option value="dangerousGoods">Перевозка опасных грузов</Option>
                <Option value="cashOnDelivery">Наложенный платеж</Option>
              </Select>
            </FormRow>
            <FormRow>
              <Label htmlFor="cargoArrivalPeriod">
                Период поступления груза к перевалке*
              </Label>
              <Select name="cargoArrivalPeriod" id="cargoArrivalPeriod">
                <Option value="" disabled selected></Option>
                <Option value="today">Сегодня</Option>
                <Option value="tomorrow">Завтра</Option>
                <Option value="in3days">Через 3 дня</Option>
                <Option value="in7days">Через неделю</Option>
                <Option value="in1month">Через месяц</Option>
                <Option value="onRequest">По запросу</Option>
                <Option value="startOfWeek">День начала недели</Option>
                <Option value="endOfMonth">Конец месяца</Option>
                <Option value="expectedDate">Ожидаемая дата</Option>
              </Select>
            </FormRow>
            <FormRow>
              <Label htmlFor="unit">Груз отправляется из порта</Label>
              <Select name="cargoTransportType" id="cargoTransportType">
                <Option value="sea">Морской транспорт</Option>
                <Option value="rail">Железнодорожный транспорт</Option>
                <Option value="road">Автомобильный транспорт</Option>
                <Option value="air">Авиационный транспорт</Option>
              </Select>
            </FormRow>
            <FormRow>
              <Label htmlFor="cname">Размер судовой партии</Label>
              <Input type="text" id="cname" name="lname" />
            </FormRow>
            <FormRow>
              <Label htmlFor="oposnost">Опостность груза (класс)</Label>
              <Input type="text" id="oposnost" name="lname" />
            </FormRow>

            <ButtonFile>
              <FormRow>
                <Label htmlFor="dname">
                  Дополнительная информация о грузо:
                </Label>
                <Input
                  type="text"
                  id="dname"
                  name="lname"
                  // style={{ height: "5rem", width: "21rem" }}
                />
              </FormRow>
              <Button type="submit">Выберите файл</Button>
              <Button type="submit">Файл не выбран</Button>
            </ButtonFile>
          </Form>
          <FullWidthForm>
            <TextForm>Просим сообщит</TextForm>
            <RadioGroup>
              <RadioOption>
                <RadioInput type="radio" name="ish" value="ish" />
                <Label htmlFor="ish">Ставку ппр</Label>
              </RadioOption>
              <RadioOption>
                <RadioInput type="radio" name="ish" value="ish" />
                <Label htmlFor="ish">
                  Ставку срок технологического накоплениия груза
                </Label>
              </RadioOption>
              <RadioOption>
                <RadioInput type="radio" name="ish" value="ish" />
                <Label htmlFor="ish">
                  Ставку хранения груза сверх срока тенологического накопления
                </Label>
              </RadioOption>
              <RadioOption>
                <RadioInput type="radio" name="ish" value="ish" />
                <Label htmlFor="ish">
                  Возможность приёма и перевалки груза в указанные сроки
                </Label>
              </RadioOption>
            </RadioGroup>
            <TextForm style={{ margin: "4rem 0 2rem  0rem" }}>
              Информация дляоабротной связи:
            </TextForm>
            <Form>
              <FormRow>
                <Label htmlFor="name">Имя, фамилия</Label>
                <Input
                  style={{ width: "20rem" }}
                  type="text"
                  id="name"
                  name="name"
                />
              </FormRow>
              <FormRow>
                <Label htmlFor="name">Номер телефона</Label>
                <Input type="number" id="name" name="name" />
              </FormRow>
              <FormRow>
                <Label htmlFor="name">Название компонии</Label>
                <Input type="text" id="name" name="name" />
              </FormRow>
              <FormRow>
                <Label htmlFor="name">Адрес эл. почты</Label>
                <Input type="text" id="name" name="name" />
              </FormRow>
            </Form>
          </FullWidthForm>
          <BottomButton type="submit">Отправить ☑</BottomButton>
        </FormWrapper>
      </Section>
      <Footer />
    </InfoWrapper>
  );
};

export default OrderForm;
