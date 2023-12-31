import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { ResetPasswordClassicComponent } from 'app/modules/admin/pages/authentication/reset-password/classic/reset-password.component';
import { ResetPasswordModernComponent } from 'app/modules/admin/pages/authentication/reset-password/modern/reset-password.component';
import { ResetPasswordModernReversedComponent } from 'app/modules/admin/pages/authentication/reset-password/modern-reversed/reset-password.component';
import { ResetPasswordFullscreenComponent } from 'app/modules/admin/pages/authentication/reset-password/fullscreen/reset-password.component';
import { ResetPasswordFullscreenReversedComponent } from 'app/modules/admin/pages/authentication/reset-password/fullscreen-reversed/reset-password.component';
import { ResetPasswordSplitScreenComponent } from 'app/modules/admin/pages/authentication/reset-password/split-screen/reset-password.component';
import { ResetPasswordSplitScreenReversedComponent } from 'app/modules/admin/pages/authentication/reset-password/split-screen-reversed/reset-password.component';

const routes: Routes = [
    {
        path    : 'reset-password',
        children: [
            {
                path     : 'classic',
                component: ResetPasswordClassicComponent
            },
            {
                path     : 'modern',
                component: ResetPasswordModernComponent
            },
            {
                path     : 'modern-reversed',
                component: ResetPasswordModernReversedComponent
            },
            {
                path     : 'split-screen',
                component: ResetPasswordSplitScreenComponent
            },
            {
                path     : 'split-screen-reversed',
                component: ResetPasswordSplitScreenReversedComponent
            },
            {
                path     : 'fullscreen',
                component: ResetPasswordFullscreenComponent
            },
            {
                path     : 'fullscreen-reversed',
                component: ResetPasswordFullscreenReversedComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        ResetPasswordClassicComponent,
        ResetPasswordModernComponent,
        ResetPasswordModernReversedComponent,
        ResetPasswordFullscreenComponent,
        ResetPasswordFullscreenReversedComponent,
        ResetPasswordSplitScreenComponent,
        ResetPasswordSplitScreenReversedComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class ResetPasswordModule
{
}
