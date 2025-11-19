import CalApp from "./app.jsx";
import CalSum from "./sum.jsx";

import ContentWrapper from "@/components/ContentWrapper";
import ContentSide from "@/components/ContentSide";
import ContentBody from "@/components/ContentBody";
import PageHeader from "@/components/ui/PageHeader";
import PageFooter from "@/components/ui/PageFooter";


export default function Calculator (){
    return (
        <ContentWrapper>
            <ContentBody>
                <PageHeader title="Calculator" />
                <CalApp />
                <PageFooter />
            </ContentBody>
            <ContentSide>
                <CalSum />
            </ContentSide>
        </ContentWrapper>
    )
}